import React from "react";
import { Particles as ReactParticles } from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";
import {isMobileOnly} from "react-device-detect";
import shar3 from '../wow.jpg'

const useStyles = makeStyles((theme) => ({
  particlesCanvasBrowser: {
   position: "absolute",
    opacity: "0.6",
    backgroundImage: "url(" + shar3 + ")"  ,
    backgroundSize: "cover",

    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",


  },
  particlesCanvasMobile: {
    position: "absolute",
    opacity: "0.3",
  },
}));

const Particles = () => {
  const classes = useStyles();

  return (
    <ReactParticles
      canvasClassName={classes.particlesCanvasBrowser}

      params={{

        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          }},

        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable_auto: true,
            distance: 100,
            color: "#7d5a5a",
            opacity: 1,
            width: 3,
            condensed_mode: {
              enable: false,
              rotateX: 600,
              rotateY: 600
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 1,
              color: "tomato",
            },
          },
          size: {
            value: 8,
            random: true,
            anim: {
              enable: false,
              speed: 6,
              size_min: 0,
              sync: true,
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              opacity_min: 0.1,
              sync: false,
            },
           

          },
        },
      }}
    />
  );
};

export default Particles;
