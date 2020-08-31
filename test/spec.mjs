import { is } from '@magic/test'

import runCluster, * as magic from '@magic/core'

export default [
  { fn: is.fn(runCluster), info: 'runCluster export is a function' },
  {
    fn: is.deep.eq(runCluster, magic.runCluster),
    info: '@magic/core default export and .runCluster are the same function',
  },
  {
    fn: is.deep.eq(runCluster, magic.default),
    info: '@magic.default and magic.runCluster are the same function',
  },
  { fn: is.fn(magic.reset), info: '@magic.reset is a function' },
  { fn: is.object(magic.colors), info: '@magic.reset is a function' },
  { fn: magic.colors.bluegrey['50'] === '#ECEFF1', info: '@magic.reset is a function' },
]
