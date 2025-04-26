export async function performHourlyTask() {
  console.log('start');

  const jwtToken = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');

  console.log(
    JSON.stringify({
      jwtToken,
      refreshToken,
    })
  );

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
  console.log(resData);

  localStorage.setItem('token', resData.token);
  localStorage.setItem('refreshToken', resData.refreshToken);
  localStorage.setItem('id', resData.id);
  localStorage.setItem('role', resData.role);
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('id');
  localStorage.removeItem('role');

  const hourlyInterval = localStorage.getItem('hourlyIntervalId');
  if (hourlyInterval) {
    clearInterval(Number(hourlyInterval));
    localStorage.removeItem('hourlyIntervalId');
  }

  window.location.href = '/';
}
