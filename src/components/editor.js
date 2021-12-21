import Quill from "quill";

export default {
  name: "Editor",
  props: {},
  data() {
    return {
      state: {
        editor: null,
        options: {
          debug: "info",
          modules: {
            toolbar: "#toolbar"
          },
          placeholder: "Compose an epic...",
          readOnly: true,
          theme: "bubble"
        }
      }
    };
  },
  mounted() {
    this.$set(
      this.state,
      "editor",
      new Quill(this.$refs.rte, this.state.options)
    );
  }
};
