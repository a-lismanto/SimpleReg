export const required = value => {
    const trimmedValue = (typeof value === "string") ? value.trim() : value;
    return (trimmedValue !== undefined && trimmedValue !== null && trimmedValue !== '' && trimmedValue.length > 0)
      ? undefined
      : 'This field is required';
}

export const email = value => {
    return value &&
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
      ? 'Invalid email address'
      : undefined;
}

export const indonesianPhone = value => {
    return value &&
      !/(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+/.test(value)
      ? 'Invalid Indonesian Phone'
      : undefined;
}