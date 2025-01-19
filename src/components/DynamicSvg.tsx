import React, { Suspense, lazy } from "react";

interface DynamicSvgProps {
  icon: string;
  className?: string;
}

const DynamicSvg: React.FC<DynamicSvgProps> = ({ icon, className }) => {
  const SvgIcon = lazy(() => import(`../assets/icons/${icon}.svg?react`));

  return (
    <Suspense fallback={<div className={className} />}>
      <SvgIcon className={className} />
    </Suspense>
  );
};

export default DynamicSvg;
