import { useAtom } from "jotai";
import { planLocalData } from "../state";

const usePlanData = () => {
    const [localPlanData, setLocalData] = useAtom(planLocalData);

    const updatePlanData = (key: string, value: any) => {
        setLocalData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return {
        localPlanData,
        setLocalData,
        updatePlanData,
    };
};

export default usePlanData;
