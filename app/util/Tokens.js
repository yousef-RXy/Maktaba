export async function performHourlyTask() {
  const jwtToken = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');

  const res = await fetch(`${import.meta.env.VITE_URL}/Account/RefreshToken`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jwtToken,
      refreshToken,
    }),
  });

  if (!res.ok) {
    const hourlyInterval = localStorage.getItem('hourlyIntervalId');
    if (hourlyInterval) {
      clearInterval(Number(hourlyInterval));
      localStorage.removeItem('hourlyIntervalId');
    }
  }

  const resData = await res.json();
  decodeJWT(resData.token, resData.refreshToken);
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('id');
  localStorage.removeItem('role');
  localStorage.removeItem('exp');

  const hourlyInterval = localStorage.getItem('hourlyIntervalId');
  if (hourlyInterval) {
    clearInterval(Number(hourlyInterval));
    localStorage.removeItem('hourlyIntervalId');
  }

  const expiredCounter = localStorage.getItem('expiredCounter');
  if (expiredCounter) {
    clearTimeout(Number(expiredCounter));
    localStorage.removeItem('expiredCounter');
  }

  window.location.href = '/';
}

export function decodeJWT(token, refreshToken) {
  const payload = token.split('.')[1];
  const decodedPayload = atob(payload);
  const decoded = JSON.parse(decodedPayload);

  const exp = decoded.exp * 1000;
  const userId = decoded.sub;
  const userRole =
    decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

  localStorage.setItem('token', token);
  localStorage.setItem('refreshToken', refreshToken);
  localStorage.setItem('id', userId);
  localStorage.setItem('role', userRole);
  localStorage.setItem('exp', exp);

  const hourlyIntervalRef = localStorage.getItem('hourlyIntervalId');
  if (hourlyIntervalRef) {
    clearInterval(Number(hourlyIntervalRef));
    localStorage.removeItem('hourlyIntervalId');
  }

  const expiredCounterRef = localStorage.getItem('expiredCounter');
  if (expiredCounterRef) {
    clearTimeout(Number(expiredCounterRef));
    localStorage.removeItem('expiredCounter');
  }

  const expired = setTimeout(logout, exp - 50000);
  const hourlyInterval = setInterval(performHourlyTask, exp - 300000);

  localStorage.setItem('expiredCounter', expired);
  localStorage.setItem('hourlyIntervalId', hourlyInterval);
}
