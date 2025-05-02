import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterNGO() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        description: "",
        location: "",
        backgroundImage: "",
        phone: "",
        facebook: "",
        instagram: "",
        website: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registered NGO:", form);
        navigate("/"); // Redirect to Home for now
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6">
            <h1 className="text-2xl font-bold mb-4">NGO Registration</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input name="name" placeholder="NGO Name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded" />
                <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full p-2 border rounded h-24" />
                <input name="location" placeholder="Address" value={form.location} onChange={handleChange} className="w-full p-2 border rounded" />
                <input name="backgroundImage" placeholder="Background Image URL" value={form.backgroundImage} onChange={handleChange} className="w-full p-2 border rounded" />
                <input name="phone" placeholder="Phone (WhatsApp)" value={form.phone} onChange={handleChange} className="w-full p-2 border rounded" />
                <input name="facebook" placeholder="Facebook Link" value={form.facebook} onChange={handleChange} className="w-full p-2 border rounded" />
                <input name="instagram" placeholder="Instagram Link" value={form.instagram} onChange={handleChange} className="w-full p-2 border rounded" />
                <input name="website" placeholder="Official Website" value={form.website} onChange={handleChange} className="w-full p-2 border rounded" />

                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                    Register
                </button>
            </form>
        </div>
    );
}
