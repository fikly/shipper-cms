import React from 'react';
import {AiOutlinePlus, AiOutlineSearch} from 'react-icons/ai';
import CustomButton from '~/components/button/CustomButton';
import PageHeader from '~/components/pageheader/Pageheader';
import Textfield from '~/components/textfield/Textfield';

const Homepage = () => {
    return (
        <div className="homepage-container">
            <PageHeader title="Driver Management" desc="Data driver yang bekerja dengan anda">
                <Textfield
                    placeholder="Cari Driver"
                    icon={<AiOutlineSearch className="icon font-18 color-primary" />}
                />
                <CustomButton type="primary">
                    <span className="text-uppercase">Tambah Driver</span>
                    <AiOutlinePlus className="font-18 ml-8p" />
                </CustomButton>
            </PageHeader>
        </div>
    );
};

export default Homepage;
