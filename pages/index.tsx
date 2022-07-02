import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import { Avatar, Button, LinearProgress, Slide, Stack } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import Image from "next/image";

const Home: NextPage = () => {
  const [slide, setSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);

  return (
    <Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: `url(/bg.png)`,
          backgroundSize: "cover",
          zIndex: 1,
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      />
      <Box
        style={{
          height: "100vh",
          background: `rgba(0,0,0,0.3)`,
          zIndex: 2,
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      ></Box>
      <Box
        zIndex={3}
        position="fixed"
        overflow="scroll"
        top={0}
        bottom={0}
        left={0}
        right={0}
      >
        <Stack
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={"70vh"}
          position="relative"
        >
          <Slide in={slide == 0} direction="right">
            <Box position="absolute">
              <Typography
                variant="h2"
                color="white"
                textAlign="center"
                fontWeight="bold"
              >
                Happy Birthday
              </Typography>
              <br />
              <Typography
                variant="h2"
                color="white"
                textAlign="center"
                fontWeight="bold"
                fontFamily={"cursive"}
              >
                Sakshi
              </Typography>
              <Box my={2} display="flex" justifyContent={"center"}>
                <Image
                  src="/sakshi.png"
                  height={150}
                  width={150}
                  objectFit="cover"
                  style={{
                    borderRadius: "80%",
                  }}
                />
              </Box>
            </Box>
          </Slide>

          <Slide in={slide == 1}>
            <Stack spacing={2} textAlign="center" position="absolute" p={2}>
              <Typography>I didn't forget your birthday,</Typography>
              <Typography variant="h5" fontWeight="bold">
                Happy 20<sup>th</sup> birthday!
              </Typography>{" "}
              <Typography>
                You now have officially passed your teenage years.
              </Typography>
              <Typography>
                {" "}
                Hope you had good time these years. <br /> Some times are not
                always good, but remember the good ones!{" "}
              </Typography>
            </Stack>
          </Slide>

          <Slide in={slide == 2}>
            <Stack spacing={2} textAlign="center" position="absolute" p={2}>
              <Typography>
                Now, you are 20, and its time to be mature, (and stop expecting
                gifts from people :p) and focus on important things.
              </Typography>
              I hope you might have found a great person in your life 😏
              <Typography>
                And Sorry couldn't send any special gift this time, but you will
                always remain special to me 😏
              </Typography>
            </Stack>
          </Slide>

          <Slide in={slide == 3}>
            <Stack spacing={2} textAlign="center" position="absolute" p={2}>
              <Typography gutterBottom fontFamily={"cursive"} variant="h3">
                Stay Happy...
              </Typography>

              <Typography>From Shreyas the Gui</Typography>
            </Stack>
          </Slide>
        </Stack>
        <Box
          display={"flex"}
          height="30vh"
          alignItems="center"
          justifyContent={"center"}
        >
          <Button
            size="large"
            variant="contained"
            onClick={() => setSlide((prev) => (prev + 1) % 4)}
          >
            <ChevronLeft
              fontSize="large"
              style={{
                transform: `rotate(180deg)`,
              }}
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
