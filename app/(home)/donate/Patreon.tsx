import { WEBSITE_URL } from '#/lib/constants';

const PatreonLogo = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <svg
    id="patreon-logo"
    viewBox="10 0 2560 356"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <g>
      <path d="M1536.54 72.449v76.933h128.24v61.473h-128.24v74.51h128.24v62.921h-206.64V9.529h206.64v62.92h-128.24M2070.82 178.907c0-55.652-37.76-107.434-99.21-107.434-61.95 0-99.21 51.782-99.21 107.434s37.26 107.435 99.21 107.435c61.45 0 99.21-51.783 99.21-107.435zm-278.77 0c0-92.916 66.79-178.093 179.56-178.093 112.26 0 179.05 85.177 179.05 178.093 0 92.916-66.79 178.093-179.05 178.093-112.77 0-179.56-85.177-179.56-178.093zM186.32 131.97c0-31.46-21.299-58.563-54.206-58.563H78.398v117.109h53.716c32.907 0 54.206-27.086 54.206-58.546zM0 9.529h141.788c75.016 0 123.417 56.628 123.417 122.441s-48.401 122.423-123.417 122.423h-63.39v93.893H0V9.529zM492.17 106.314l-41.621 139.382h82.266L492.17 106.314zm73.081 241.972-13.054-41.134H431.69l-13.072 41.134h-83.73L455.882 9.529h72.105l122.442 338.757h-85.178zM782.055 77.277H705.61V9.529h231.793v67.748h-76.951v271.009h-78.397V77.277M2485.08 230.202V9.529h77.91v338.757h-81.78l-121.97-217.78v217.78h-78.4V9.529h81.78l122.46 220.673M1245.68 131.97c0-31.46-21.3-58.563-54.21-58.563h-53.72v117.109h53.72c32.91 0 54.21-27.086 54.21-58.546zM1059.36 9.529h142.29c75 0 123.4 56.628 123.4 122.441 0 47.425-25.17 89.517-67.28 109.369l67.77 106.947h-90.98l-60.03-93.893h-36.78v93.893h-78.39V9.529z" />
    </g>
  </svg>
);

const donationUrls = {
  successUrl: `${WEBSITE_URL}/donate`,
  cancelUrl: `${WEBSITE_URL}/donate`,
};

const patreonDefaultPledgeAmount = 500;

const patreonClientId = process.env.NEXT_PUBLIC_PATREON_CLIENT_ID;

const PatreonButton = () => {
  if (!patreonClientId || !patreonDefaultPledgeAmount || !donationUrls.successUrl) {
    return null;
  }

  const clientId = `&client_id=${patreonClientId}`;
  const pledgeLevel = `$&min_cents=${patreonDefaultPledgeAmount}`;
  const v2Params = '&scope=identity%20identity[email]';
  const redirectUri = `&redirect_uri=${donationUrls.successUrl}`;
  const href = `https://www.patreon.com/oauth2/become-patron?response_type=code${pledgeLevel}${clientId}${redirectUri}${v2Params}`;

  return (
    <>
      <a
        className="min-h-10 flex items-center justify-center rounded-md border-none bg-[#ff424d] px-2 py-4 hover:bg-[#e13d47]"
        data-patreon-widget-type="become-patron-button"
        href={href}
        rel="noreferrer noopener"
        target="_blank"
      >
        <PatreonLogo className="max-h-3 fill-white" height="12px" width="87px" />
      </a>
    </>
  );
};

export default PatreonButton;
