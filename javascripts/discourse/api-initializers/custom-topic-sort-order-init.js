import { apiInitializer } from "discourse/lib/api";
import CustomTopicSortOrder from "../components/custom-topic-sort-order";

export default apiInitializer("1.8.0", (api) => {

  api.renderInOutlet("before-create-topic-button", CustomTopicSortOrder);
});
