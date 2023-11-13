
import { AppRouter } from "./router/AppRouter"
import { AppTheme, blueTheme } from "./theme"


export const JobsApp = () => {

  return (
    <AppTheme theme={blueTheme}>
      <AppRouter />
    </AppTheme>
  )
}