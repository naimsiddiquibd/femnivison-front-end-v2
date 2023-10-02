import React from "react";

import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

import supportImg from "../assets/support.jpg";

const Support = () => {
  return (
    <div name="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-4">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            FEMNIVISION
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            THE STEPS WE FOLLOW
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 relative gap-x-8 gap-y-4 px-4 pt-4 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-lg">
            <div className="p-8">
              <div className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] text-center text-2xl">
                1
              </div>
              <h3 className="font-bold text-md my-6">
                Free No-Obligation 20-Minute Discovery Call
              </h3>
              <p className="text-gray-600 text-sm">
                To determine our compatibility, I provide a complimentary
                20-minute Zoom video consultation. During this meeting, I will
                delve deeper into your needs and queries. If it turns out that
                our collaboration might not be the best fit, I will
                transparently communicate this and guide you to suitable
                alternatives. Upon confirming our partnership, you will receive
                a Client Intake Form and my Terms and Conditions, which you
                should sign and send back along with your payment. This is a
                prerequisite before we can schedule our first session together.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg">
            <div className="p-8">
              <div className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] text-center text-2xl">
                2
              </div>
              <h3 className="font-bold text-md my-6">Hypnotherapy Session</h3>
              <p className="text-gray-600 text-sm">
                The session will be conducted online and typically spans 1.5 to
                2 hours. To accommodate any potential need for additional time,
                clients are requested to allocate three hours. During the
                initial 15-minute consultation, we will assess the information
                you've provided and define your precise objectives and desired
                outcomes. Subsequently, an RTT® hypnotherapy session will ensue,
                encompassing hypnosis and regression techniques to uncover the
                underlying issue's origins. The session will conclude with a
                process of reframing and a potent transformation aimed at
                implanting a constructive new suggestion into your subconscious
                mind.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg">
            <div className="p-8">
              <div className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] text-center text-2xl">
                3
              </div>
              <h3 className="font-bold text-md my-6">
                Hypnotherapy Voice Recording + Optional Video Deepener
              </h3>
              <p className="text-gray-600 text-sm">
                After our session, I will create a daily voice recording for you
                to use for a minimum of 21 days. I will deliver this recording
                via email, enabling you to download it to your mobile phone or
                computer for daily playback. The effectiveness of your
                investment relies on your commitment to listening to the
                recording daily for at least 21 days after our session. Repeated
                listening will firmly establish new, positive beliefs, replacing
                old, unwanted habits and forging new neurological pathways,
                rewiring your brain. Additionally, you can choose to enhance
                your experience with a custom Video Deepener as an optional
                add-on. This includes a hypnotic video animation, my soothing
                voice, and meditative background music. The video animation is
                strategically designed to help my suggestive voice penetrate
                your subconscious while captivating your conscious mind with its
                hypnotic visuals.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg">
            <div className="p-8">
              <div className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] text-center text-2xl">
                4
              </div>
              <h3 className="font-bold text-md my-6">Post-Session Follow-Up</h3>
              <p className="text-gray-600 text-sm">
                The success of your investment hinges on your commitment to
                daily listening to your recorded session for at least 21 days
                post your RTT® hypnotherapy session. I'll be available for
                support a mere 10 days after your session. Once you've completed
                the 21-day listening regimen, we'll arrange a follow-up call to
                touch base.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
