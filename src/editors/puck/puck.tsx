import { Puck, type Config } from "@puckeditor/core";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Button from "./components/Button";

type Components = {
  Header: { headers: { text: string; url: string }[] };
  Menu: unknown;
  Button: { text: string; url: string; openInNewTab: boolean };
};

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
    },
    Menu: {
      render: () => {
        return <Menu />;
      },
    },
    Button: {
      fields: {
        openInNewTab: {
          type: "radio",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        text: { type: "text" },
        url: { type: "text" },
      },
      render: Button,
    },
  },
};

const initialData = {};

function PuckEditor() {
  const save = (data: unknown) => {
    console.log(data);
  };

  return <Puck config={config} data={initialData} onPublish={save} />;
}

export default PuckEditor;
