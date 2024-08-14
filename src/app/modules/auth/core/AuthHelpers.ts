const AUTH_LOCAL_STORAGE_KEY = 'kt-auth-react-v'
const getAuth = (): any | undefined => {
  if (!localStorage) {
    return
  }
  const lsValue: string | null = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY)
  if (!lsValue) {
    return
  }
  try {
    const auth: any = JSON.parse(lsValue) as any
    if (auth) {
      return auth
    }
  } catch (error) {
    console.error('AUTH LOCAL STORAGE PARSE ERROR', error)
  }
}

const setAuth = (auth: any) => {
  if (!localStorage) {
    return
  }
  try {
    const lsValue = JSON.stringify(auth)
    localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, lsValue)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE SAVE ERROR', error)
  }
}

const removeAuth = () => {
  if (!localStorage) {
    return
  }
  try {
    localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE REMOVE ERROR', error)
  }
}

export function setupAxios(axios: any) {
  axios.defaults.headers.Accept = 'application/json'
  axios.interceptors.request.use(
    (config: {headers: {Authorization: string}}) => {
      const auth = getAuth();
      console.log("auth setup",auth)
      if (auth && auth?.accessToken) {
        config.headers.Authorization = `${auth?.accessToken}`
      }
      return config
    },
    (err: any) => Promise.reject(err)
  )
}

export {getAuth, setAuth, removeAuth, AUTH_LOCAL_STORAGE_KEY}
