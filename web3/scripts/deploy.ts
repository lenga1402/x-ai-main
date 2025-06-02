import fs from "fs";
import { ethers } from "hardhat";

type PropsData = NodeJS.Dict<string | string[]>;

export const deploy = async (contractName: string, ...args: unknown[]) => {
  try {
    const factory = await ethers.getContractFactory(contractName);

    const contract = await factory.deploy(...args);

    const prefixLink = getPrefixLink();

    console.log(`Contract '${contractName}' is deployed to: ${prefixLink + contract.address}`);

    saveAddress(contractName, contract.address);

    process.exit(0);
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

const getPrefixLink = () => {
  switch (process.env.npm_config_network) {
    case "bnbt":
      return "https://testnet.bscscan.com/address/";

    case "bnb":
      return "https://bscscan.com/address/";

    default:
      return "";
  }
};

const saveAddress = (contractName: string, contractAddress: string) => {
  const buffer = fs.readFileSync("../../src/constants/contracts.json");

  let data: PropsData | undefined;

  if (buffer.length !== 0) data = JSON.parse(buffer.toString()) as PropsData;

  if (!data || typeof data !== "object" || Array.isArray(data)) data = {};

  data[contractName.toLowerCase()] = contractAddress;

  const result = JSON.stringify(data, null, 4);

  fs.writeFileSync("../../src/constants/contracts.json", result, "utf8");
};
