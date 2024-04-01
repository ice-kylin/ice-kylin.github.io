export function formatDate(dateString: string): string {
	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(new Date(dateString));
}

export function getRelativeTimeDifference(targetDate: Date): string {
	const today = new Date();
	const timeDifference = today.getTime() - targetDate.getTime();
	const millisecondsInSecond = 1000;
	const secondsInMinute = 60;
	const minutesInHour = 60;
	const hoursInDay = 24;
	const daysInWeek = 7;

	const secondsDifference = Math.floor(timeDifference / millisecondsInSecond);
	const minutesDifference = Math.floor(secondsDifference / secondsInMinute);
	const hoursDifference = Math.floor(minutesDifference / minutesInHour);
	const daysDifference = Math.floor(hoursDifference / hoursInDay);
	const weeksDifference = Math.floor(daysDifference / daysInWeek);

	const targetYear = targetDate.getFullYear();
	const targetMonth = targetDate.getMonth();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth();

	const yearDifference = currentYear - targetYear;
	const monthDifference = currentMonth - targetMonth;

	if (yearDifference > 0) {
		return `${yearDifference} 年前`;
	} else if (monthDifference > 0) {
		return `${monthDifference} 个月前`;
	} else if (weeksDifference > 0) {
		return `${weeksDifference} 周前`;
	} else if (daysDifference > 0) {
		return `${daysDifference} 天前`;
	} else if (hoursDifference > 0) {
		return `${hoursDifference} 小时前`;
	} else if (minutesDifference > 0) {
		return `${minutesDifference} 分钟前`;
	} else {
		return '刚刚';
	}
}

export const API_URL_SERVER = import.meta.env.VITE_API_URL_SERVER;
export const API_URL_CLIENT = import.meta.env.VITE_API_URL_CLIENT;
