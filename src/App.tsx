import { Container, Grid, Paper, Typography } from "@mui/material";
import { theme } from "./theme/Theme";
import AvatarProfile from "./components/AvatarProfile";
export const App = () => {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        px: 4,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              background: theme.palette.primary.main,
              backgroundImage: "url(../images/bg-pattern-quotation.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "85%",
              minHeight: 250,
              borderRadius: 3,
              p: 4,
              position: "relative",
            }}
          >
            <AvatarProfile
              name="Daniel Clifford"
              url="../images/image-daniel.jpg"
              color="primary.contrastText"
            />
            <Typography
              fontSize={18}
              color="primary.contrastText"
              fontWeight={600}
              zIndex={1}
              marginBottom={2}
              textAlign="left"
            >
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel
              I got every penny’s worth.
            </Typography>
            <Typography
              fontWeight={500}
              fontSize={13}
              color="primary.contrastText"
              sx={{
                opacity: 0.4,
              }}
            >
              “ I was an EMT for many years before I joined the bootcamp. I’ve
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I’ve successfully switched
              careers, working as a Software Engineer at a VR startup. ”
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              background: theme.palette.primary.dark,
              minHeight: 250,
              borderRadius: 3,
              p: 4,
              position: "relative",
            }}
          >
            <AvatarProfile
              name="Jonathan Walters"
              url="../images/image-jonathan.jpg"
              color="primary.contrastText"
            />
            <Typography
              fontSize={18}
              color="primary.contrastText"
              fontWeight={600}
              zIndex={1}
              marginBottom={2}
              textAlign="left"
            >
              The team was very supportive and kept me motivated
            </Typography>
            <Typography
              fontWeight={500}
              fontSize={13}
              color="primary.contrastText"
              sx={{
                opacity: 0.4,
              }}
            >
              “ I started as a total newbie with virtually no coding skills. I
              now work as a mobile engineer for a big company. This was one of
              the best investments I’ve made in myself. ”
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              background: theme.palette.primary.contrastText,
              minHeight: 250,
              borderRadius: 3,
              p: 4,
              position: "relative",
            }}
          >
            <AvatarProfile
              name="Jeanette Harmon"
              url="../images/image-jeanette.jpg"
              color="primary.dark"
            />
            <Typography
              fontSize={18}
              color="primary.dark"
              fontWeight={600}
              zIndex={1}
              marginBottom={2}
              textAlign="left"
            >
              An overall wonderful and rewarding experience
            </Typography>
            <Typography
              fontWeight={500}
              fontSize={13}
              color="primary.dark"
              sx={{
                opacity: 0.6,
              }}
            >
              “ Thank you for the wonderful experience! I now have a job I
              really enjoy, and make a good living while doing something I love.
              ”
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              background: theme.palette.secondary.main,
              minHeight: 250,
              borderRadius: 3,
              p: 4,
              position: "relative",
            }}
          >
            <AvatarProfile
              name="Patrick Abrams"
              url="../images/image-patrick.jpg"
              color="primary.contrastText"
            />
            <Typography
              fontSize={18}
              color="primary.contrastText"
              fontWeight={600}
              zIndex={1}
              marginBottom={2}
              textAlign="left"
            >
              An overall wonderful and rewarding experience
            </Typography>
            <Typography
              fontWeight={500}
              fontSize={13}
              color="primary.contrastText"
              sx={{
                opacity: 0.4,
              }}
            >
              “ Thank you for the wonderful experience! I now have a job I
              really enjoy, and make a good living while doing something I love.
              ”
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Container>
  );
};
