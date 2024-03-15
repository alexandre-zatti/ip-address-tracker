import { beforeAll, describe, expect, it, Mock, vi } from "vitest";
import { render } from "@testing-library/react";
import { IpSearch } from "@/app/components/IpSearch";
import { IpResult } from "@/app/types/IpResult";
import { IpResult as mockIpResult } from '@/app/mocks/fixtures/IpResult'

let isPendingMock = false;
let startTransitionMock: Mock<[callback: any], void>;

describe('IpSearch', () => {

  beforeAll(() => {
    isPendingMock = false; // Reset to default state before each test
    startTransitionMock = vi.fn(callback => {
      // Simulate the startTransition function
      isPendingMock = true; // Simulate entering a pending state
      callback(); // Execute the callback immediately for simplicity
      isPendingMock = false; // Simulate leaving the pending state
    });

    vi.mock('react', () => {
      const originalReact = vi.importActual('react'); // Import the actual React module
      return {
        ...originalReact, // Spread all original React exports to ensure they're available
        useTransition: () => [isPendingMock, startTransitionMock], // Override useTransition
        useEffect: () => vi.fn()
      };
    });
  });

  const mockEmptyIpResult: IpResult = {};


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
    render(<IpSearch ipDataResult={mockIpResult}/>)
  });

  it('should have no default value on input when no data', async () => {
    const {getByRole} = render(<IpSearch ipDataResult={mockEmptyIpResult}/>)

    const input = getByRole('textbox', {name: 'ip search name'})
    expect(input).toHaveValue('')
  });

  it('should have correct placeholder on input field', async () => {
    const {getByRole} = render(<IpSearch ipDataResult={mockEmptyIpResult}/>)

    const input = getByRole('textbox', {name: 'ip search name'})
    expect(input).toHaveAttribute('placeholder', 'Search for any IP adress...')
  });

})