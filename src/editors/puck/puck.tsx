import { Puck, type Config, type Data } from "@puckeditor/core";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Event from "./components/Event";
import Exhibitors from "./components/Exhibitors";
import Sponsors from "./components/Sponsors";

// #region Type
type Components = {
  Header: { headers: { text: string; url: string }[] };
  Menu: unknown;
  Banner: {
    imageUrl: string;
    text: string;
    ctaButton1: { text: string; url: string };
    ctaButton2: { text: string; url: string };
  };
  Event: {
    imageUrl: string;
    title: string;
    dateTime: string;
    buttonText: string;
  };
  Exhibitors: unknown;
  Sponsors: unknown;
};

// #region Config
const config: Config<Components> = {
  components: {
    Header: {
      fields: {
        headers: {
          type: "array",
          arrayFields: { text: { type: "text" }, url: { type: "text" } },
        },
      },
      defaultProps: {
        headers: [],
      },
      render: ({ headers }) => {
        return <Header headers={headers} />;
      },
      permissions: {
        delete: false,
        drag: false,
        duplicate: false,
        insert: false,
      },
    },
    Menu: {
      render: () => {
        return <Menu />;
      },
      permissions: {
        delete: false,
        drag: false,
        duplicate: false,
        insert: false,
      },
    },
    Banner: {
      defaultProps: {
        text: "Register to Limitless Innovation",
        imageUrl:
          "https://dev-resources.poweround.com/static/tenant/module-banners/Event.jpg",
        ctaButton1: {
          text: "Book your Booth",
          url: "https://affangp.dev.poweround.com/expo/47/floors/?floorId=37",
        },
        ctaButton2: {
          text: "Book Additional Items",
          url: "https://affangp.dev.poweround.com/expo/47/additional-items-services/?tab=all",
        },
      },
      fields: {
        imageUrl: {
          type: "text",
          label: "Banner Image",
        },
        ctaButton1: {
          label: "CTA Button 1",
          type: "object",
          objectFields: {
            text: { type: "text" },
            url: { type: "text" },
          },
        },
        ctaButton2: {
          label: "CTA Button 2",
          type: "object",
          objectFields: {
            text: { type: "text" },
            url: { type: "text" },
          },
        },
        text: { type: "text" },
      },
      render: Banner,
      permissions: {
        delete: false,
        drag: false,
        duplicate: false,
        insert: false,
      },
    },
    Event: {
      defaultProps: {
        imageUrl:
          "https://dev-resources.poweround.com/static/tenant/module-banners/Event.jpg",
        title: "Conference 2027",
        dateTime: "19th October - 2nd November, 2026",
        buttonText: "Visit Event",
      },
      fields: {
        imageUrl: { type: "text" },
        title: { type: "text" },
        dateTime: { type: "text" },
        buttonText: { type: "text" },
      },
      render: Event,
    },
    Exhibitors: {
      render: Exhibitors,
    },
    Sponsors: {
      render: Sponsors,
    },
  },
};

// #region Init data
const initialData: Partial<Data<Components>> = {
  content: [
    {
      type: "Header",
      props: {
        headers: [{ text: "Affan", url: "https://wikipedia.com" }],
        id: "home-header",
      },
    },
    {
      type: "Menu",
      props: { id: "home-menu" },
    },
    {
      type: "Banner",
      props: {
        id: "home-banner",
        text: "Register to Limitless Innovation",
        imageUrl:
          "https://dev-resources.poweround.com/static/tenant/module-banners/Event.jpg",
        ctaButton1: {
          text: "Book your Booth",
          url: "https://affangp.dev.poweround.com/expo/47/floors/?floorId=37",
        },
        ctaButton2: {
          text: "Book Additional Items",
          url: "https://affangp.dev.poweround.com/expo/47/additional-items-services/?tab=all",
        },
      },
    },
  ],
};

// #region MAIN
function PuckEditor() {
  const save = (data: unknown) => {
    console.log(data);
  };

  return <Puck config={config} data={initialData} onPublish={save} />;
}

export default PuckEditor;
