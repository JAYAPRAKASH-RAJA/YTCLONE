// ReportHistory.tsx
import { useState } from 'preact/hooks';
import Navbar from './Navbar';

const ReportHistory = () => {
  const [reports, setReports] = useState([
    { id: 1, title: 'Video 1', date: '2024-09-01', status: 'Reviewed' },
    { id: 2, title: 'Video 2', date: '2024-09-05', status: 'Pending' },
    { id: 3, title: 'Video 3', date: '2024-09-10', status: 'Rejected' },
  ]);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen mt-20 bg-[#0f0f0f] text-white p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Report History</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <p className="mb-4">Thanks for reporting. Any member of the YouTube community can flag content to us that they believe violates our Community Guidelines. When something is flagged, it's not automatically taken down. Flagged content is reviewed in line with the following guidelines:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Content that violates our <span className='text-blue-500'>Community Guidelines</span> is removed from YouTube.</li>
            <li>Content that may not be appropriate for all younger audiences may be age-restricted.</li>
            <li>Reports filed for content that has been deleted by the creator cannot be shown.</li>
          </ul>
          <p className="mb-4 text-blue-500" >Learn more about reporting content on YouTube.</p>
          <div className="overflow-x-auto items-center">
            <table className="w-full table-auto">
              <thead>
                <tr className=''>
                  <th className="px-4 ">Title</th>
                  <th className="px-4 ">Date</th>
                  <th className="px-4 ">Status</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id} className="border-t border-gray-700">
                    <td className="px-4 py-2">{report.title}</td>
                    <td className="px-4 py-2">{report.date}</td>
                    <td className="px-4 py-2">{report.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ReportHistory;
