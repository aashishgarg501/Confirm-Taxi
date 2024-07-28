import { useState } from "react";
import dayjs from 'dayjs';

const UseOutstationRides = () => {
    const [formData, setFormData] = useState(
        {
            from: '',
            to: '',
            date: dayjs(),
            passengers: '',
            offerPrice: ''
        });
    const [errors, setErrors] = useState({});
    const [rideBtn, setRideBtn] = useState('private')

    const handleChange = (e) => {
        const { name, value } = e.target ? e.target : { name: 'date', value: e };
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.from) {
            newErrors.from = 'Please enter city';
        }

        if (!formData.to) {
            newErrors.to = 'Please enter city';
        }

        if (!formData.date) {
            newErrors.date = 'Please enter date';
        }
        if (!formData.passengers) {
            newErrors.passengers = 'Please enter passengers';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e?.preventDefault();
        if (validate()) {
            console.log(formData, 'formData');
        }
    };
    return {
        data: {
            formData,
            errors,
            rideBtn,
        },
        methods: {
            handleChange,
            handleSubmit,
            setRideBtn
        }
    }
}

export default UseOutstationRides