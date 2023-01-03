import { EchoPackageA } from "@mono-ci-demo/pkg-a";
import { EchoPackageB } from "@mono-ci-demo/pkg-b";

export default function EchoPackageC() {
  EchoPackageA();
  EchoPackageB();

  console.log("Echo: Package C");
}