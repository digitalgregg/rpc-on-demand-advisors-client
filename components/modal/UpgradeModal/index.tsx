/* eslint-disable @next/next/no-img-element */
import CustomModal from "../../Shared/CustomUtils/CustomModal";

import { UpgradeModalState } from "../../../state";
import { useAtom } from "jotai";
import { useRouter } from "next/router";

type UpgradeModalType = {
    modalOpen: boolean;
    handleModal: () => any;
};

function UpgradeModal({ modalOpen, handleModal }: UpgradeModalType) {
    const [upgradeModal] = useAtom(UpgradeModalState);
    const [, setUpgradeModal] = useAtom(UpgradeModalState);
    const router = useRouter();
    const handleUpgradePlan = () => {
        router.push("/dashboard/billing/subscription-plan");
        setUpgradeModal("");
    };

    return (
        <CustomModal
            isOpen={modalOpen}
            onRequestClose={handleModal}
            className="w-[calc(100vw-56.4px)] max-w-[500px] bg-[#fff] overflow-hidden rounded-[4px]"
        >
            <div className="py-[50px]">
                <img
                    src="/img/noPlan.svg"
                    alt="No plan"
                    className=" block w-[200px] sm:w-[256px] md:w-[291px]   2xl:w-[480px]  mx-auto"
                />
                <p className="text-[16px] sm:text-[24px] mx-auto font-normal sm:font-semibold leading-[24.51px] sm:leading-[32.68px] text-center px-5 mt-[40px]   2xl:font-bold">
                    Please upgrade your plan now to get{" "}
                    <span className="text-primary">{upgradeModal}</span> and
                    <span className="text-primary"> more features!</span>
                </p>
                <div className="w-full text-center ">
                    <button
                        onClick={handleUpgradePlan}
                        className="w-[150px] sm:w-[200px] sm:h-[48px] h-[40px] rounded-[4px] bg-[#E51937] text-white font-semibold text-[16px] sm:text-[18px] cursor-pointer leading-[40px] mt-[20px]"
                    >
                        Upgrade Plan
                    </button>
                </div>
            </div>
        </CustomModal>
    );
}

export default UpgradeModal;
