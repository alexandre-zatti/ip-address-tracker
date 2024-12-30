import { describe, expect, it, Mock, vi } from "vitest";
import { render } from "@testing-library/react";
import { IpSearch } from "@/app/components/IpSearch";
import { IpResult as mockIpResult } from '@/app/mocks/fixtures/IpResult'

let isPendingMock = false;
let startTransitionMock: Mock<[callback: any], void>;

describe('IpSearch', () => {

  vi.mock('next/navigation', () => ({
    useRouter: () => ({
      refresh: vi.fn(),
      push: vi.fn()
    }),
    usePathname: () => ({
      pathname: 'http://localhost:3000/'
    })
  }))

  it('should render component without crashing', () => {
    const { getByPlaceholderText } = render(<IpSearch ipDataResult={{data: mockIpResult}}/>)

    expect(getByPlaceholderText('Search for any IP adress...')).toBeInTheDocument()
  });
})