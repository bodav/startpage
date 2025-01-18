import React, { Suspense, lazy } from "react";

interface DynamicSvgProps {
  icon: string;
  className?: string;
}

const DynamicSvg: React.FC<DynamicSvgProps> = ({ icon, className }) => {
  const SvgIcon = lazy(() => import(`../assets/icons/${icon}.svg`));

  return (
    <Suspense>
      <SvgIcon className={className} />
    </Suspense>
  );
};

export default DynamicSvg;
