import { Panel as Card } from "./SystemUI";
import { Button } from "./Controls";
import { SectionReveal as AnimatedSection } from "./Controls";
import { SectionHeading as SectionHeader } from "./SystemUI";
import { useState } from "react";
import { allCertificates } from "../Data/CertificateData";

const Certificate = () => {
  const [showAll, setShowAll] = useState(false);
  const limit = 3;
  const certificatesToShow = showAll
    ? allCertificates
    : allCertificates.slice(0, limit);

  const handleViewLess = () => {
    setShowAll(false);
    document
      .getElementById("certificate")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AnimatedSection id="certificate" className="bg-gray-900">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Certificates & Achievements"
            subtitle="Milestones along the way. More learning ahead."
          />
          <div className="grid lg:grid-cols-3 gap-8">
            {certificatesToShow.map((cert, i) => (
              <div
                key={cert.name}
                className="child-animate"
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <Card className="overflow-hidden h-full flex flex-col border-gray-800">
                  <div className="relative overflow-hidden">
                    <img
                      loading="lazy"
                      src={cert.previewImage}
                      alt={cert.name}
                      className="w-full h-48 object-contain"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="font-bold text-xl text-white font-orbitron min-h-[56px]">
                      {cert.name}
                    </h3>
                    <p className="text-gray-500 mt-1 text-xs">
                      {`Achieved: ${cert.yearAchieve}${cert.yearEnd ? ` - Valid Until: ${cert.yearEnd}` : ""}`}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs text-blue-400 mt-4 font-mono bg-gray-900/50 px-2 py-1 rounded w-fit max-w-full break-words">
                        {cert.credentialId}
                      </p>
                    )}
                    {cert.url.trim() && (
                      <div className="mt-auto pt-4 border-t border-gray-700 mt-4">
                        <Button
                          href={cert.url}
                          className="w-full !py-2 !text-sm"
                        >
                          View Credential
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </div>
          {allCertificates.length > limit && (
            <div
              className="text-center mt-12 child-animate"
              style={{ transitionDelay: "300ms" }}
            >
              {showAll ? (
                <Button onClick={handleViewLess} variant="secondary">
                  View Less
                </Button>
              ) : (
                <Button onClick={() => setShowAll(true)} variant="secondary">
                  View All Certificates
                </Button>
              )}
            </div>
          )}
        </div>
      </AnimatedSection>
    </>
  );
};

export default Certificate;
