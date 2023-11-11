import { Fragment, useState } from "react";
import PropTypes from 'prop-types';

import { Circle, Email, Phone, Place } from "@mui/icons-material";
import { Autocomplete, Avatar, Box, Button, CircularProgress, Divider, Grid, TextField, Typography } from "@mui/material"

import { useAuthStore, useFetch } from "../../hooks";
import { getEnvCandidate, getEnvProjects } from "../../helpers/getEnvVaribles";
import { searchToolApi } from "../../api";

const startProcess = async (companyId, projectId, candidateId ) => {
  try {
    const { data } = await searchToolApi.post('/search/cv/chosen-one', { companyId, projectId, candidateId })
    console.log('data', data);
    return data.message;
  } catch (error) {
    console.log('error', error);
  }
}

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const projects = getEnvProjects();
const candidate = getEnvCandidate();

export const DetailProfile = ({idCandidate}) => {

  const { id } = useAuthStore();
  
  const [openProjects, setopenProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const { data: dataProjects, loading: loadingDataProject } = useFetch(`${projects}?companyId=${id}`)
  const { data: infoBasic, loading: loadingInfoBasic } = useFetch(`${candidate}/profile/basicinfo/${idCandidate}`)
  const { data: infoExp, loading: loadingInfoExp } = useFetch(`${candidate}/profile/experience/${idCandidate}`)
  const { data: infoEducation, loading: loadingInfoEducation } = useFetch(`${candidate}/profile/education/${idCandidate}`)
  const { data: infoCertificates, loading: loadingInfoCertificates } = useFetch(`${candidate}/profile/certificates/${idCandidate}`)

  const handledClick = (event) => {
    event.preventDefault();
    console.log('start process', selectedProject, !selectedProject)
    if (!selectedProject) return;
    startProcess(idCandidate, id, selectedProject);
  }

  return (
    <Box>
      <Grid container xs={12} direction="row" spacing={2} sx={{ marginTop: '10px' }} justifyContent="end">
        <Autocomplete
          
          id="project"
          sx={{ width: 200 }}
          onChange={(event, value) => {
            setSelectedProject(value.id);
          }}
          open={openProjects}
          onOpen={() => {
            setopenProjects(true);
          }}
          onClose={() => {
            setopenProjects(false);
          }}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          getOptionLabel={(option) => option.projectName}
          options={dataProjects}
          loading={loadingDataProject}
          renderInput={(params) => (
            <TextField
              {...params}
              label="projects"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <Fragment>
                    {loadingDataProject ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </Fragment>
                ),
              }}
            />
          )}

        />
        <Button variant="contained" onClick={handledClick}>Start process</Button>
      </Grid>
      <Grid container xs={12} sx={{ width: '90%', background: '#F9F9FB', marginTop: '15px', padding: '25px', borderRadius: '16px' }} direction="column" alignItems="flex-start">
        {loadingInfoBasic ? '' :
          (
            <Grid key={idCandidate} container xs={12} direction="row" justifyContent="center">
              <Avatar sx={{ width: 150, height: 100 }} {...stringAvatar(infoBasic.full_name)} />
              <Typography variant="h5" sx={{ width: '100%', textAlign: 'center' }}>{infoBasic.name} {infoBasic.lastname}</Typography>
              <Grid container xs={12} direction="row" justifyContent="center">
                <Phone color="primary" /><Typography variant="bodt" >{infoBasic.phone_number || '000 0000000'}</Typography>
                <Email color="primary" /><Typography variant="body2" >{infoBasic.email}</Typography>
                <Place color="primary" /><Typography variant="body2" >{infoBasic.nacionality}</Typography>
              </Grid>
            </Grid>
          )
        }
      </Grid>
      <Grid container xs={12} sx={{ width: '90%', marginTop: '15px', padding: '25px' }} spacing={2} direction="row" justifyContent="center">
        <Grid item direction="column" alignItems="start" xs={3} sx={{ background: '#F9F9FB', margin: '15px', padding: '25px', borderRadius: '16px' }}>
          <Typography variant="h5" >Experience</Typography>
          {loadingInfoExp && !infoExp ? '' :
            infoExp?.experience.map(exp => (
              <Grid key={exp.company_name}>
                <Typography variant="h6" >{exp.company_name} </Typography>
                <Typography variant="body2" >{exp.place}</Typography>
                <Typography variant="body1" >{exp.position}</Typography>
                <Typography variant="body2" >{exp.start_date}<Circle sx={{ widh: "10px", height: "10px" }} color="primary" />{exp.end_date}</Typography>
                <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />
              </Grid>
            ))
          }
        </Grid>
        <Grid item direction="column" alignItems="start" xs={3} sx={{ background: '#F9F9FB', margin: '15px', padding: '20px', borderRadius: '16px' }}>
          <Typography variant="h5" >Education</Typography>
          {loadingInfoEducation ? '' :
            infoEducation?.education.map(education => (
              <Grid key={education.subject}>
                <Typography variant="h6" >{education.university}</Typography>
                <Typography variant="body1" >{education.subject}</Typography>
                <Typography variant="body2" >{education.start_date} <Circle sx={{ widh: "10px", height: "10px" }} color="primary" /> {education.end_date}</Typography>
                <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />
              </Grid>

            ))
          }
        </Grid>
        <Grid item direction="column" alignItems="start" xs={3} sx={{ background: '#F9F9FB', margin: '15px', padding: '25px', borderRadius: '16px' }}>
          <Typography variant="h5" >Certifications</Typography>
          {loadingInfoCertificates ? '' :
            infoCertificates?.certificates.map(cert =>
            (
              <Grid key={cert.name_certificatel}>
                <Typography variant="h6" >{cert.name_certificate} </Typography>
                <Typography variant="body1" >Inssued<Circle sx={{ widh: "10px", height: "10px" }} color="primary" />{cert.company} </Typography>
                <Typography variant="body2" >{cert.expedition_date}</Typography>
              </Grid>
            ))
          }
        </Grid>
      </Grid>
    </Box>
  )
}

DetailProfile.propTypes = {
  idCandidate: PropTypes.string.isRequired
} 
