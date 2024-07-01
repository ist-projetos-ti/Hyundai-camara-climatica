import { createContext, ReactNode, FC, useContext } from 'react';
import { QueryKey, UseQueryResult, useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@services/queryClient';
import { api } from '@services/api';
import { TestHistoryApiRoutes } from '../api/paths.routes';

type TestHistoryModuleProvidersProps = {
  children: ReactNode;
};

interface MachineSecondsTest {
  total_seconds: number;
}

interface TestHistoryContextData {
  GetMachineSecondsTest(): UseQueryResult<MachineSecondsTest>;
}

const TestHistoryContext = createContext<TestHistoryContextData>(
  {} as TestHistoryContextData
);

const TestHistoryProvider: FC<TestHistoryModuleProvidersProps> = ({
  children,
}) => {
  const GetMachineSecondsTest = (): UseQueryResult<MachineSecondsTest> =>
    useQuery(
      [QueryKeys.TEST_HISTORY] as QueryKey,
      async () => {
        const { data } = await api.get<number>(
          TestHistoryApiRoutes.GET_MACHINE_SECONDS_TEST
        );

        return data;
      },
      {
        staleTime: 1000 * 60 * 10,
      }
    );

  return (
    <TestHistoryContext.Provider value={{ GetMachineSecondsTest }}>
      {children}
    </TestHistoryContext.Provider>
  );
};

export default TestHistoryProvider;

function useTestHistory(): TestHistoryContextData {
  const context = useContext(TestHistoryContext);

  if (!context) {
    throw new Error('useTestHistory must be used within a TestHistoryProvider');
  }

  return context;
}

export { TestHistoryProvider, useTestHistory };
