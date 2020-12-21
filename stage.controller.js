import Stage_model from "./prsmageodel";
import stage from "./stage.model";
import vm from "v-response"

exports.create_stage = (req, res, next) => {
    let stage_body = req.body;
    const new_stage = new stage(stage_body);
    new_stage.save()
        .then(saved => {
            if(!saved) {
                return res.status(400)
                    .json(vm.ApiResponse(false, 400, "unable to save stage, please try again"))
            }
            if (saved) {
                return res.status(201)
                    .json(vm.ApiResponse(true, 201, "stage created successfully", saved))
            }
        }).catch(err => {
            return res.status(500)
                .json(vm.ApiResponse(false, 500, "error will robinson", undefined, err))
        })
}