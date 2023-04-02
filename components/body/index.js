import ComponentContent from "../content/content"
export default function index() {
  return (
    <div>
      <div className="flex_justify_center" style={{ marginTop: 15 }}>
        <div style={{ borderTop: "1px solid grey", width: "90%" }}></div>
      </div>
      <div>

        <ComponentContent data={[
          {

            head: "hieu",
            titleChild: "hieune"
          }
        ]} />
      </div>
    </div>
  );
}
