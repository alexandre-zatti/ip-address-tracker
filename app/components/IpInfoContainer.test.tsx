import { describe, it } from "vitest";
import { IpInfoContainer } from "@/app/components/IpInfoContainer";
import { IpResult as mockIpResult } from "@/app/mocks/fixtures/IpResult";
import { render } from "@testing-library/react";


describe('IpInfoContainer', () => {
  it('should render the component', () => {
    render(<IpInfoContainer ipDataResult={{data: mockIpResult}}/>)
  });
})