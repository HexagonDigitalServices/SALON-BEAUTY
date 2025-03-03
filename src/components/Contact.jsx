import { FiUser, FiPhone, FiCalendar, FiClock, FiCheck, FiInfo, FiX } from 'react-icons/fi';


    const services = useMemo(() => [
        "Hair Styling",
        "Facial Treatment",
        "Manicure/Pedicure",
        "Massage Therapy",
        "Makeup Artistry",
        "Hair Coloring",
        "Waxing",
        "Skin Care",
        "Body Treatment",
        "Others"
    ], []);


    const validateForm = useCallback(() => {
        const errors = {};
        if (!name.trim()) errors.name = 'Name is required.';
        if (!phone.trim()) errors.phone = 'Phone number is required.';
        else if (!/^\d{10}$/.test(phone)) errors.phone = 'Phone number must be exactly 10 digits.';
        if (selectedServices.length === 0) errors.services = 'Please select at least one service.';
        if (!date) errors.date = 'Date is required.';
        if (!time) errors.time = 'Time is required.';
        return errors;
    }, [name, phone, selectedServices, date, time]);

 const message = `Name: ${name}%0APhone: ${phone}%0AServices: ${selectedServices.join(', ')}%0ADate: ${date}%0ATime: ${time}`;
