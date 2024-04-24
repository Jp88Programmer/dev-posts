function getTimeDifferenceString(dateString: string) {
  const currentDate = new Date();
  const date = new Date(dateString);

  const timeDifference = currentDate.getTime() - date.getTime();
  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);

  if (daysDifference > 1) {
    return `Published ${daysDifference} days ago`;
  } else if (hoursDifference > 1) {
    return `Published ${hoursDifference} hours ago`;
  } else if (minutesDifference > 1) {
    return `Published ${minutesDifference} minutes ago`;
  } else {
    return `Published ${secondsDifference} minutes ago`;
  }
}

function calculateReadingTime(content: string) {
  const index = content.indexOf("[");

  const numberOfChars = content?.substring(index)?.split(" ")[0]?.substring(2);

  // Average reading speed in words per minute
  const wordsPerMinute = 200; // Adjust this value as needed

  // Calculate the reading time in minutes
  const readingTimeInMinutes = parseInt(numberOfChars) / wordsPerMinute;

  // Round up to the nearest whole number
  const readingTimeRounded = Math.ceil(readingTimeInMinutes);

  return readingTimeRounded;
}

export { getTimeDifferenceString, calculateReadingTime };
