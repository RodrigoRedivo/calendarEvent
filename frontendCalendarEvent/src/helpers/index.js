class LocalStorageUtil {
  get(key) {
    const result = localStorage.getItem(key);
    if (result) {
      return JSON.parse(result);
    }
    return null;
  }
  set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  remove(key) {
    localStorage.removeItem(key);
  }
}

export async function callAPi(url, params = {}) {
  try {
    const result = await fetch(url, params);
    const jsonResult = result.json();

    return jsonResult;
  } catch (e) {
    console.log(e);
  }
}

export const LS = new LocalStorageUtil();
