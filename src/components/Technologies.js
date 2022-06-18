import { ReactComponent as ZbrushIcon } from "../images/zbrush.svg";
import { ReactComponent as SubstanceIcon } from "../images/substance.svg";
import {
  SiAdobephotoshop as PhotoshopIcon,
  SiAdobeillustrator as IllustratorIcon,
  SiBlender as BlenderIcon,
} from "react-icons/si";

export const technologies = {
  photoshop: {
    title: "Adobe Photoshop",
    icon: PhotoshopIcon,
    fill: "#5CA7F8",
  },
  illustrator: {
    title: "Adobe Illustrator",
    icon: IllustratorIcon,
    fill: "#EF9E39",
  },
  zbrush: {
    title: "Zbrush",
    icon: ZbrushIcon,
    fill: "#fff",
  },
  blender: {
    title: "Blender",
    icon: BlenderIcon,
    fill: "#fff",
  },
  substance: {
    title: "Adobe Substance 3D Painter",
    icon: SubstanceIcon,
    fill: "#fff",
  },
  marmoset: {
    title: "Marmoset",
    icon: SubstanceIcon,
    fill: "#blue",
  },
};
