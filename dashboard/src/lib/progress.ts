// Photos for the "Progress" gallery on the home page, in the order shown. Files live in public/progress/.
// The first one is shown full width, the rest in two columns. `width` and `height` are the file's pixel size.
export type ProgressPhoto = { src: string; alt: string; caption: string; width: number; height: number };

export const PROGRESS: readonly ProgressPhoto[] = [
  {
    src: "/progress/model-boat-floats.jpg",
    alt: "Two team members watching the model boat float in the Marine Robotics Lab pool",
    caption: "The model boat floats! Testing in the pool at the UW–Madison Marine Robotics Lab.",
    width: 1600,
    height: 975,
  },
  {
    src: "/progress/model-boat-build.jpg",
    alt: "A team member wiring electronics for the model boat at a workbench",
    caption: "Building and wiring the model boat.",
    width: 768,
    height: 1024,
  },
  {
    src: "/progress/hull-cad-session.jpg",
    alt: "Two team members working on the hull and rudder CAD at library computers",
    caption: "Peyton and Patrick working on hull and rudder CAD designs.",
    width: 1024,
    height: 768,
  },
  {
    src: "/progress/top-cover-cad.jpg",
    alt: "CAD model of the boat's top cover, with a rectangular opening in the deck",
    caption: "Our top cover in CAD.",
    width: 1600,
    height: 1072,
  },
  {
    src: "/progress/motor-mount-cad.jpg",
    alt: "CAD model of the motor held in an adjustable mount with slotted side plates",
    caption: "Our motor and motor mount in CAD.",
    width: 1350,
    height: 896,
  },
];
