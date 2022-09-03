// import { FilePreviewerThumbnail } from "react-file-previewer";

// export default function App() {
//   return (
//     <div className="w-full">
//       <FilePreviewerThumbnail
//         file={{
//           url:
//             "https://www.pexels.com/video/ceramic-cup-on-top-of-a-cabinet-6962687/"
//         }}
//       />

//     </div>
//   );
// }

import React from "react";
import FileViewer from "../Library/FileViewer";

const ViewFile = () => {
    return (
        <>
            <FileViewer src="/demo/aaa.jpg" />
        </>
    );
};

export default ViewFile;
