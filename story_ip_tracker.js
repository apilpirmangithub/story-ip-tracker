import { StoryClient } from "@story-protocol/core-sdk";

async function main() {
  const client = new StoryClient({
    rpcUrl: "https://rpc.story.foundation"
  });

  const ipAssets = await client.ipAsset.listIPAssets();
  console.log(`Total IP Assets: ${ipAssets.length}`);

  if (ipAssets.length > 0) {
    const ipId = ipAssets[0].ipId;
    const licenseTerms = await client.license.getLicenseTerms({ ipId });
    console.log(`\nIP Pertama (${ipId}) punya ${licenseTerms.length} lisensi:`);

    for (const term of licenseTerms) {
      console.log(`- License Term ID: ${term.licenseTermsId}, Commercial Use: ${term.commercialUse}`);
    }
  } else {
    console.log("Belum ada IP yang terdaftar.");
  }
}

main().catch(console.error);
