import { Container, Paper, Typography } from "@mui/material";
import { theme } from "./theme/Theme";
import AvatarProfile from "./components/AvatarProfile";
import "./index.css";
export const App = () => {
  return (
    <main>
      <Container
        sx={{
          minHeight: "150vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="grid-container">
          <div
            // xs={12}
            // sm={8}
            // md={6}
            className="one"
            // order={1}
          >
            <Paper
              elevation={3}
              sx={{
                background: theme.palette.primary.main,
                backgroundImage: "url(../images/bg-pattern-quotation.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "85%",
                minHeight: "100%",
                borderRadius: 3,
                p: 4,
                transition: "transform 0.5s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  cursor: "pointer",
                },
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
                I received a job offer mid-course, and the subjects I learned
                were current, if not more so, in the company I joined. I
                honestly feel I got every penny’s worth.
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
                course and found it incredibly fun! I enrolled shortly
                thereafter. The next 12 weeks was the best - and most grueling -
                time of my life. Since completing the course, I’ve successfully
                switched careers, working as a Software Engineer at a VR
                startup. ”
              </Typography>
            </Paper>
          </div>
          <div className="two">
            <Paper
              elevation={3}
              sx={{
                background: theme.palette.primary.dark,
                minHeight: "100%",
                borderRadius: 3,
                p: 4,
                transition: "transform 0.5s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  cursor: "pointer",
                },
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
          </div>
          <div className="four">
            <Paper
              elevation={3}
              sx={{
                background: theme.palette.primary.contrastText,
                minHeight: "100%",
                borderRadius: 3,
                p: 4,
                transition: "transform 0.5s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  cursor: "pointer",
                },
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
                really enjoy, and make a good living while doing something I
                love. ”
              </Typography>
            </Paper>
          </div>
          <div
            // item
            // xs={12}
            // sm={6}
            // md={6}
            className="five"
          >
            <Paper
              elevation={3}
              sx={{
                background: theme.palette.secondary.main,
                minHeight: "100%",
                borderRadius: 3,
                p: 4,
                transition: "transform 0.5s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  cursor: "pointer",
                },
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
                Awesome teaching support from TAs who did the bootcamp
                themselves. Getting guidance from them and learning from their
                experiences was easy.
              </Typography>
              <Typography
                fontWeight={500}
                fontSize={13}
                color="primary.contrastText"
                sx={{
                  opacity: 0.4,
                  transition: "transform 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    cursor: "pointer",
                  },
                }}
              >
                “ The staff seem genuinely concerned about my progress which I
                find really refreshing. The program gave me the confidence
                necessary to be able to go out in the world and present myself
                as a capable junior developer. The standard is above the rest.
                You will get the personal attention you need from an incredible
                community of smart and amazing people. ”
              </Typography>
            </Paper>
          </div>
          <div className="three">
            <Paper
              elevation={3}
              sx={{
                background: theme.palette.primary.contrastText,
                minHeight: "100%",
                borderRadius: 3,
                p: 4,
                transition: "transform 0.5s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  cursor: "pointer",
                },
              }}
            >
              <AvatarProfile
                name="Kira Whittle"
                url="../images/image-kira.jpg"
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
                Such a life-changing experience. Highly recommended!
              </Typography>
              <Typography
                fontWeight={500}
                fontSize={13}
                color="primary.dark"
                sx={{
                  opacity: 0.6,
                }}
              >
                “ Before joining the bootcamp, I’ve never written a line of
                code. I needed some structure from professionals who can help me
                learn programming step by step. I was encouraged to enroll by a
                former student of theirs who can only say wonderful things about
                the program. The entire curriculum and staff did not disappoint.
                They were very hands-on and I never had to wait long for
                assistance. The agile team project, in particular, was
                outstanding. It took my learning to the next level in a way that
                no tutorial could ever have. In fact, I’ve often referred to it
                during interviews as an example of my developent experience. It
                certainly helped me land a job as a full-stack developer after
                receiving multiple offers. 100% recommend!
              </Typography>
            </Paper>
          </div>
        </div>
      </Container>
    </main>
  );
};
