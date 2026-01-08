// import { getJobById, getTenantData } from "../../data/data_retrival";
import {fetchJobById,fetchTenantData} from "../../data/data_fetch"; 
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
export const runtime = "edge";
export default async function Jobpage({
  params,
}: {
  params: Promise<{ jobid: string }>;
}) {
  const { jobid } = await params;
  const domain = "docbox";
  const tenantDataResponse: any = await fetchTenantData();
  const tenantData = tenantDataResponse.data ;
  const jobResponse: any = await fetchJobById(jobid);
  console.log("jobResponse",jobResponse); 
  const job = jobResponse;

  if (!tenantData) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold mb-2  ">
          404
        </h1>
        <h2 className="text-l font-normal mb-2">Page Not Found</h2>
      </section>
    );
  }

  if (!job) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold mb-2  ">
          404
        </h1>
        <h2 className="text-l font-normal mb-2">Job Not Found</h2>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <Card className="mb-8 text-center">
        <CardHeader>
          {/* {tenantData?.website?.logo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={tenantData.website.logo}
              alt={`${tenantData.website.title} logo`}
              className="mx-auto h-20 mb-4"
            />
          )} */}
          <CardTitle className="text-4xl font-extrabold text-gray-900 mb-2">
            {tenantData?.website?.title}
          </CardTitle>
          <CardDescription className="text-lg text-gray-700">
            {tenantData?.website?.description}
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="container mx-auto p-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-800 mb-4">{job.title}</CardTitle>
          <CardDescription className="text-gray-600 text-lg mb-4">{job.location}</CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">Description</h3>
          <p className="text-gray-800 mb-6">{job.description}</p>

          <h3 className="text-2xl font-semibold text-gray-700 mb-2">Qualifications</h3>
          <ul className="list-disc list-inside text-gray-800 mb-6">
            {job.qualifications.map((qualification: string) => (
              <li key={qualification}>{qualification}</li>
            ))}
          </ul>

          <Link href="/" passHref>
            <Button variant="link">← Back to jobs</Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}

