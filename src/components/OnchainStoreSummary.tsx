import { GITHUB_LINK, ONCHAINKIT_LINK } from 'src/links';
import { ExternalLinkSvg } from 'src/svg/ExternalLinkSvg';

export default function OnchainStoreSummary() {
  return (
    <div className="flex flex-col justify-center border-gray-200 border-b p-4 py-8 pb-22 md:w-1/3 md:border-r md:border-b-0 md:py-4 lg:border-r lg:p-6 lg:pb-22">
      <div className="space-y-4 text-left">
        <h2
          className="font-bold text-3xl leading-tight"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontStretch: 'condensed',
          }}
        >
          Shorebirds is for all of us — the surfers, 
          skaters, and shredders who live for the stoke. 
          We’re building something new, based an ecosystem 
          that empowers creators, athletes, and fans from 
          around the world, and backed by the transparency 
          and security of the blockchain.
          
        </h2>
        <p className="text-sm leading-relaxed">
          Join the movement to bring millions of us - from
          the legends we look up to, to the friends we skate
          with - into the first surf, skate, and snow
          community onchain.
          
        </p>
        <p className="text-sm leading-relaxed">
          We're updating the system so it's cheaper and faster.
        </p>
        <div className="flex flex-col pt-6">
          <p className="pt-2 pb-2 font-bold text-sm leading-relaxed">
            THE FUTURE IS ONCHAIN
          </p>
         
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
