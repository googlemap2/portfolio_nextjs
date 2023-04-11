import ComponentContent from "../content/content";
import styleHome from "../../styles/Home.module.css";
export default function index() {
  return (
    <div style={{ padding: "15px" }}>
      <div className="flex_justify_center" style={{ marginTop: 15 }}>
        <div style={{ borderTop: "1px solid grey", width: "90%" }}></div>
      </div>
      <div>
        <ComponentContent
          data={[
            {
              head: "Professional Field",
              className: `${styleHome.color_cc3d30} ${styleHome.font_size19}`,
              style: {},
              contents: [
                {
                  text: "FRONT-END DEVELOPMENT",
                  className: `${styleHome.color_cc3d30} ${styleHome.font_size14} ${styleHome.padding_left_5px}`,
                  style: {},
                  contents: [
                    {
                      text: "- HTML, CSS, Javascript.",
                      className: `${styleHome.font_size14} ${styleHome.padding_left_5px}`,
                      style: {},
                    },
                  ],
                },
                {
                  text: "PROGRAMMING LANGUAGES",
                  className: `${styleHome.color_cc3d30} ${styleHome.font_size14} ${styleHome.padding_left_5px}`,
                  style: { paddingLeft: "5px" },
                  contents: [
                    {
                      text: "- PHP, C#, laravel, nodejs, CI3.",
                      className: `${styleHome.font_size14} ${styleHome.padding_left_5px}`,
                      style: {},
                    },
                  ],
                },
                {
                  text: "QUERY LANGUAGES",
                  className: `${styleHome.color_cc3d30} ${styleHome.font_size14} ${styleHome.padding_left_5px}`,
                  style: { paddingLeft: "5px" },
                  contents: [
                    {
                      text: "- SqlServer, Mysql, PostgresSQL.",
                      className: `${styleHome.font_size14} ${styleHome.padding_left_5px}`,
                      style: {},
                    },
                  ],
                },
              ],
            },
            {
              head: "Other Skills",
              className: `${styleHome.color_cc3d30} ${styleHome.font_size19}`,
              style: {},
              contents: [
                {
                  text: "- Database analysis and design.",
                  className: `${styleHome.font_size14} ${styleHome.padding_left_5px}`,
                  style: {},
                },
                {
                  text: "- Listen to feedback and improve oneself.",
                  className: `${styleHome.font_size14} ${styleHome.padding_left_5px}`,
                  style: { paddingLeft: "5px" },
                },
                {
                  text: "- Ability to learn independently.",
                  className: `${styleHome.font_size14} ${styleHome.padding_left_5px}`,
                  style: { paddingLeft: "5px" },
                },
                {
                  text: "- Ability to solve problems",
                  className: `${styleHome.font_size14} ${styleHome.padding_left_5px}`,
                  style: { paddingLeft: "5px" },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}
