import DownloadsList from "@/components/DownloadsList";
import { downloadGroups } from "@/lib/downloads";

export const metadata = {
  title: "Downloads"
};

export default function DownloadsPage() {
  return (
    <div className="container">
      <h1>Downloads</h1>
      <p>Catalogues, manuals, and media resources.</p>
      <DownloadsList groups={downloadGroups} />
    </div>
  );
}
