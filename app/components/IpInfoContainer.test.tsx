import { describe, expect, it } from "vitest";
import { IpInfoContainer } from "@/app/components/IpInfoContainer";
import { IpResult as mockIpResult } from "@/app/mocks/fixtures/IpResult";
import { getByText, render } from "@testing-library/react";


describe('IpInfoContainer', () => {
  it('should render the component', () => {
   const { getByText } = render(<IpInfoContainer ipDataResult={{data: mockIpResult}}/>)

    expect(getByText('IP ADDRESS')).toBeInTheDocument()
    expect(getByText('LOCATION')).toBeInTheDocument()
    expect(getByText('COUNTRY')).toBeInTheDocument()
    expect(getByText('ISP')).toBeInTheDocument()
  });
})