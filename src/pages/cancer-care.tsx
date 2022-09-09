import type { NextPage } from "next";
import CancerCareContent from "../components/CancerCareContent";
import EquippingLayout from "../components/Layouts/EquippingLayout";

const CancerCare: NextPage = () => {
  return (
    <EquippingLayout>
      <CancerCareContent />
    </EquippingLayout>
  );
};

export default CancerCare;
