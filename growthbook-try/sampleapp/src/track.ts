import { GrowthBook } from "@growthbook/growthbook";
import { autoAttributesPlugin } from "@growthbook/growthbook/plugins";

export const growthbook = new GrowthBook({
  apiHost: "http://localhost:3100",
  clientKey: "sdk-KPafELBtIY6hvwCo",
  enableDevMode: true,
  trackingCallback: (experiment, result) => {
    console.log("Viewed Experiment", {
      experimentId: experiment.key,
      variationId: result.key
    });
  },
  plugins: [ autoAttributesPlugin() ],
});
