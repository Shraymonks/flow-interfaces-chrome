type chrome$StorageUnitInfo = {
  capacity: number,
  id: string,
  name: string,
  type: 'fixed' | 'removable' | 'unknown'
};
type $system$features = 'avx' | 'mmx' | 'sse' | 'sse2' | 'sse3' | 'ssse3' | 'sse4_1' | 'sse4_2';
type $system$ejectResult = 'failure' | 'in_use' | 'no_such_device' | 'success';

type chrome$system = {
  cpu: {
    getInfo(callback: (info: {
      archName: string,
      features: Array<$system$features>,
      modelName: string,
      numOfProcessors: number,
      processors: Array<{
        usage: {
          idle: number,
          kernel: number,
          total: number,
          user: number
        }
      }>
    }) => void): void
  },
  memory: {
    getInfo(callback: (info: {
      availableCapacity: number,
      capacity: number
    }) => void): void
  },
  storage: {
    ejectDevice(id: string, callback: (result: $system$ejectResult) => void): void,
    getAvailableCapacity(id: string, callback: (info: {
      availableCapacity: number,
      id: string
    }) => void): void,
    getInfo(callback: (info: Array<chrome$StorageUnitInfo>) => void): void,

    onAttached: {
      ...chrome$Event,
      addListener(callback: (info: chrome$StorageUnitInfo) => void): void
    },
    onDetached: {
      ...chrome$Event,
      addListener(callback: (id: string) => void): void
    }
  }
}
