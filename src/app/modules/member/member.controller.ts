import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import memberService from './member.service';

const createMember = catchAsync(async (req, res) => {
  const body = req.body;
  const data = await memberService.createMemberDB(body);

  sendResponse(res, {
    success: true,
    status: 200,
    message: 'Member created successfully',
    data,
  });
});

const getAllMember = catchAsync(async (req, res) => {
  const data = await memberService.getAllMemberDB();

  sendResponse(res, {
    success: true,
    status: 200,
    message: 'Members retrieved successfully',
    data,
  });
});

const getAMember = catchAsync(async (req, res) => {
  const memberId = req.params.memberId;
  const data = await memberService.getAMemberDB(memberId);

  sendResponse(res, {
    success: true,
    status: 200,
    message: 'Members retrieved successfully',
    data,
  });
});

const updateMember = catchAsync(async (req, res) => {
  const memberId = req.params.memberId;
  const body = req.body;
  const data = await memberService.updateMemberDB(memberId, body);

  sendResponse(res, {
    success: true,
    status: 200,
    message: 'Members updated successfully',
    data,
  });
});

const deleteMember = catchAsync(async (req, res) => {
    const memberId = req.params.memberId;
    await memberService.deleteMemberDB(memberId);
  
    sendResponse(res, {
      success: true,
      status: 200,
      message: 'Members deleted successfully',
    });
  });

const memberController = {
  createMember,
  getAllMember,
  getAMember,
  updateMember,
  deleteMember
};

export default memberController;
