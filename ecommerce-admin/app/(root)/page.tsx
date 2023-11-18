"use client";
import {Modal} from "@/components/ui/modal";

const SetupPage = () =>  {
    return (
        <div className="p-4">
            <Modal title="Test" description="Testing" isOpen={true} onClose={() => {}}>
                Childern
            </Modal>
        </div>
    )
}

export default SetupPage;
