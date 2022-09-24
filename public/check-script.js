const BASE_URL = "http://localhost:8080";

onmessage = async (e) => {
    const { type } = e.data;

    if (type === "import") {
        try {
            const { importData } = e.data;

            const response = await fetch(`${BASE_URL}/api/importcsv/import`, {
                method: "post",
                body: JSON.stringify(importData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            if (data.success) {
                postMessage({
                    success: true,
                });
            } else {
                postMessage({ success: false });
            }
        } catch (err) {
            postMessage({ success: false });
        }
    }
};
// await api.post("/api/importcsv/import", {
//     csvData,
//     team_id: teamData.id,
//     user_id: teamData.user_id,
// });
